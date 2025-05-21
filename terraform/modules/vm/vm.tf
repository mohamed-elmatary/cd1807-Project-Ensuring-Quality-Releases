resource "azurerm_network_interface" "nic" {
  name                = "${var.application_type}-${var.resource_type}-nic"
  location            = "${var.location}"
  resource_group_name = "${var.resource_group}"

  ip_configuration {
    name                          = "internal"
    subnet_id                     = "${var.subnet_id}"
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = "${var.public_ip_address_id}"
  }
}

resource "azurerm_linux_virtual_machine" "vm" {
  name                = "${var.application_type}${var.resource_type}"
  location            = "${var.location}"
  resource_group_name = "${var.resource_group}"
  size                = "Standard_DS2_v2"
  admin_username      = "azureuser"
  network_interface_ids = [azurerm_network_interface.nic.id]
  admin_ssh_key {
    username   = "azureuser"
    public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDePWJKqOVbwDg1OOwdYhWrW9R+TihNQebU0PZK9rUH+gvfGarxWi9ri5qa+J09JqvmfHLfKv5aVBrgk01lk/kIWNGexnfAyu6uKjkvVvOnTirf7hjgRj9tIBaSssRrkoTJx8/K7BE5tsI0Iey/e/zZC/ij98lGO6MXQMcYdb6+OKV1kvKfnOFoOIA65+IbCNoqv63SyySMkdO/C+mXvM1AYTfD48tj2SIHImDZ2SrhzKednfviu19Tdbh6E5z/erC1epPiRBDLPSU4zXYIO+8vZ0JiJZyS+SHwDze2ip9mkYuXMrGZFf1/i5TGXkG1VlPeRJ+ffUJbn2nQPGBIyRJyQx4x4mYAiRVBfMq4HMFm/ZktN+CBKznHItbhe2hATAzuj3sgCuE8hTlLyYGLTotQCppfOlHqbda5zZUZ9B0U16CV8hHexvioNqbD3Lky2kGp7vvaCRXIP/BuXYR7PystNyusvfpSrP2DClTjdYTJO7XHVrDMLnvsekBIzikRmhc= mohamed@SandboxHost-638833790602742044"
  }
  os_disk {
    caching           = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }
  source_image_id = "/subscriptions/aa9cd12c-7c25-41fa-b40b-6650c05128ba/resourceGroups/AZUREDEVOPS2/providers/Microsoft.Compute/images/myApplication714-VM-image-20250521052058"
  
  allow_extension_operations = true
}

resource "azurerm_virtual_machine_extension" "azure_monitor_linux_agent" {
  name                 = "AzureMonitorLinuxAgent"
  virtual_machine_id   = azurerm_linux_virtual_machine.vm.id
  publisher            = "Microsoft.Azure.Monitor"
  type                 = "AzureMonitorLinuxAgent"
  type_handler_version = "1.35.4"
  auto_upgrade_minor_version = true

  settings = <<SETTINGS
  {
    "workspaceId": "c8cc1b99-1bf0-413f-8786-0796db9aac55"
  }
  SETTINGS

  protected_settings = <<PROTECTED_SETTINGS
  {
    "workspaceKey": "tspGl17VRxb1bo7SD227bkSeNUMjFDEp4PVMxEq57rqbHtJ4lU092G/LpjpZ2GAr9xNj07arNlixY9LlyP8Fgw=="
  }
  PROTECTED_SETTINGS
}


