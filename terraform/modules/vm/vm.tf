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
    public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQChjWyIqrhPURBUSKvH4XCchNyTa/ZA/5ISYRjv77sedtqiZ0AVrKc2+t7oxLZBlOchFVFW4mVZ6YsiKJASGJgHS+CRSJ4LxT4hiO5ocL+48QHwRrR3P16nTxffJGKWrOoxyM/Yie1dTMSzRWH0GsnwrCRnHAbnLuPqtKrfGPpnB8y1xlvXFnz4x3oCRmMiCwzGXHhg9A65A36PqWH1+8F9AJRzvJcFSg/DAQjYPDVL6m2RmjZxGPiE0cOJi7OO7hpmFbPVO7D/MBB9crFSXTpq1dr8hZhZfa+ESpUXEC64o/4EYmHrC4SvodSHn3ZWTKvf3nXiU1OpnIYJJeAFkmIVEoOM9SDLewQacRrm7fHHruwo/tzYvhj7Co1cTcWssywJxv9FRXqA2OGXwo4zKKWU+JdFR4LFHb3f1NpXT5bzWm5+PjxZ/weV9gxtQlQPBoZ5vC4Axmv1B3EB6SEyux5CoNZikSadGrgWsXRi/OaU56efWV6pcCE0QlyvSf/9Ijs= MohamedShaban@MohamedShaaban"
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
