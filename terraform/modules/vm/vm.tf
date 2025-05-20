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
    public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC7b909Y9M27RTn+lYatl4629UzGgKP+Fmrk8c3x1p6Tw6lSADk1zC8S9vVkNlsKY55043BYbRauQ7C7D2i2dgWS+553lr7hiPlhOPy+HqQ4FO+YaQdcUM9A3psAMhaMjH+9Mmk9lzNj0g0WJXVAG8GJ/R8OIUYWsxg+WyTkp5UYX5JMGdq+gCcuA0hjo2CDWt6syHL9KPNytJEK0rqpNyhpVxSAYetzPhue/pRls1BMitSqJAzS5lmdvSfqeguw/YNmnzFZK3uXDvP2MDythNLNBsFZDLd8fvGAthRImehWk1UOrd1+OyXuIpEglyn9zeb87wx8Mq9q6yJ6dbBFbBZL0BhldItGuUbgQIMIuuNQ1r2qFL77uGjAxdL/C0+cDEDlizC9Axjj4lOoSmql53k/d3twlnsJSD6fIyxFvmZ8UN99Q4cWtU0DOOjg0dWzT275yhonxdBTnDeblpkFe6Gl0CFVO3c/I1eChag7W0VTMFot2LlrSwbRjDpPdREwAU= mohamed@SandboxHost-638833019118113617"
  }
  os_disk {
    caching           = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }
  source_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-lts"
    version   = "latest"
  }

}
