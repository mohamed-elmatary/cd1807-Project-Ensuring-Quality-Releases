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
  name                = "${var.application_type}-${var.resource_type}"
  location            = "${var.location}"
  resource_group_name = "${var.resource_group}"
  size                = "Standard_DS2_v2"
  admin_username      = "azureuser"
  network_interface_ids = [azurerm_network_interface.nic.id]
  admin_ssh_key {
    username   = "azureuser"
    public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDEl15mo0lKhiR6j11DltA+Tjsp9Tg7rc0YDQR2Y4yEOPy1/QFzza0CuVuwKAHCf6Q172z4+R1jfqDEWHvKNDXt3P1Tbi8E01KG4HbC2uYgdnYRuVVjen6JUxFhv1UXyynISz5wyOHoXrLxefRGb2uizOKKlUyaw3DWAGzWdx1dcrXJP8UtFf+ZUNhmIz6VVvErDjZPqhaHWnjbIe6QblI7GQO9SJH6kJgC/znRsowdF27CBIUvCbu2FXQEB4wdgHsIVOXbslNZou4nJIo17lgm61CUkLcX1zJmTE5avnjI8awrM/xeWin8keRtLAFI62nw14H7vcQH2uunbZVnJs0Ub+Q13+FOAeJU940QZDUxwBkZBdKHjqBH+I5OeRg4SxU5aLIkM55rfC2+EJSYGe/7SlRKPzzcS5Jkbwgx+UPkR39o8+/9XXBCpjFCd1jeA3urpbtgJfDlVF4P7og5vQ0SHTsKkPlGIfQdW2R6B5X15YOR1CjtNGXbVwAAoQJRr7k= MohamedShaban@MohamedShaaban"
  }
  os_disk {
    caching           = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }  
  source_image_id = "/subscriptions/aa9cd12c-7c25-41fa-b40b-6650c05128ba/resourceGroups/QUALITYASSURANCE/providers/Microsoft.Compute/images/myApplication714-VM-image-20250520144805"
}

resource "azurerm_virtual_machine_extension" "monitor_agent" {
  name                       = "${azurerm_linux_virtual_machine.vm.name}-AzureMonitorLinuxAgent"
  virtual_machine_id   = azurerm_linux_virtual_machine.vm.id
  publisher            = "Microsoft.Azure.Monitor"
  type                 = "AzureMonitorLinuxAgent"
  type_handler_version       = "1.27"
  auto_upgrade_minor_version = true

  settings = jsonencode({
    workspaceId =  "c8cc1b99-1bf0-413f-8786-0796db9aac55"
  })

  protected_settings = jsonencode({
    "workspaceKey": "tspGl17VRxb1bo7SD227bkSeNUMjFDEp4PVMxEq57rqbHtJ4lU092G/LpjpZ2GAr9xNj07arNlixY9LlyP8Fgw=="
  })
}
