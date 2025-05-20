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
  source_image_reference {
    publisher = "Canonical"
    offer     = "UbuntuServer"
    sku       = "20.04-LTS"
    version   = "latest"
  }
}
