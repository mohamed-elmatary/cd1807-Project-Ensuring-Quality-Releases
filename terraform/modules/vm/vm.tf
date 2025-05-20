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
    public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCzkcp1fJVor86tqbT5P3Kqy41wWF5LkxIfVk7KRgKgdRUjtQ5gtEFFsKcQ1c2SDH6yQCf52yabCnffWzVcUQOOCKn9qzK7Uc1Oa+cUdHKJ4CpnfVyD4ppem+CgINWHWZkvdGaKi88fAXs7aSdJgd4PTYVL/c7/xer3o3m84zbwk+uQLavX4o3y4ko3eh4PcUkGr3H3JRtVMfbETQ2Nu3aJ/NEoXJYQIRU8XWZoAl4FJyFO6q/5vBlJ75ohjPpt0HQUn4zwCdokKhn3I0fOVZMPkY8cgVKmo+YJJ/MzPVSuUHazmvZR+4EYl5aNF8uD00KsM/w+8u8g2mprDy4KF3pVd4NQCj11tXGnfT+rEheQ3a7RYXCibhXdIsGaaSn4Rb3oF9ofNM9ISdl3n5gaXPJv9Wt5wosmA19Du5LAHfw/Qdf8Xjfe+9UaIslJnpKh4GI/ELa9hXDLOqfF2we5y8jEFLv7hyHHTLFnct7QKMHpHS21lv2FJH3MvgQx1ZF8Wqc= mohamed@SandboxHost-638833019118113617"
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
