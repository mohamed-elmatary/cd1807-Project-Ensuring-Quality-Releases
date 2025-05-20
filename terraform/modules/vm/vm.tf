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
    public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDIb7mUT59m4TG4DYJtr3a3HX9gXifd8k9/UJ2zQABRAVOdNh6h4PCXo9Q/fjLCyinMzIT/Of6aWe2JfNL5fl06zpPPi8PcGDiasU5m/M854ux/ahsKjPGS/S4Ld085va9MyKyByXxiC0ZqqQUBd9NAQflVHft2Mm4bTBuP2ydtZQLcmh+mKQVeslKJvoAiBWWrq15y/h//HaR340qhovzR8At6e4NfMdnhzzEicGAFm1DasBGsirvCfsWKL6RDG/4TQdm7Rw/oHi3FF3IpM5QPgUkuBzej/9WhjY6HAB9pzB920dLdnKLiiVSIacVzieLiXyR7uPAYaobLFXBYh3qDIzevPDTQi62swykVY7VzAjZ3nvgGBgrYcBesD/ikwKyi/5QQ4CorybVwHOcuT0DULXI7j6FiHimrOZTbujq150SxKC2/NnnaFseqlNRTjV3ML5DJKURyb7ZbVNsbKJSmSN4+kJRxN9pmjpIIkH61xHtln1Sr4k/nEWt8xvy7m6c= mohamed@SandboxHost-638833019118113617
"
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
