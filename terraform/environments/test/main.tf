provider "azurerm" {
  features {}
}
terraform {
  backend "azurerm" {
    storage_account_name = "tfstate166962342"
    container_name       = "tfstate"
    key                  = "test.terraform.tfstate"
    access_key           = "/SjdMJia/SEF8nR7TMXHo1r8x+6BN0WyzlsDWQY0o2UQHL5lpEFdWx+heICurkz2hw9eaDJf8LcA+ASt2AohAg=="
  }
}
module "resource_group" {
  source               = "../../modules/resource_group"
  resource_group       = "${var.resource_group}"
  location             = "${var.location}"
}
module "network" {
  source               = "../../modules/network"
  address_space        = "${var.address_space}"
  location             = "${var.location}"
  virtual_network_name = "${var.virtual_network_name}"
  application_type     = "${var.application_type}"
  resource_type        = "NET"
  resource_group       = "${module.resource_group.resource_group_name}"
  address_prefix_test  = "${var.address_prefix_test}"
}

module "nsg-test" {
  source           = "../../modules/networksecuritygroup"
  location         = "${var.location}"
  application_type = "${var.application_type}"
  resource_type    = "NSG"
  resource_group   = "${module.resource_group.resource_group_name}"
  subnet_id        = "${module.network.subnet_id_test}"
  address_prefix_test = "${var.address_prefix_test}"
}
module "appservice" {
  source           = "../../modules/appservice"
  location         = "${var.location}"
  application_type = "${var.application_type}"
  resource_type    = "AppService"
  resource_group   = "${module.resource_group.resource_group_name}"
}
module "publicip" {
  source           = "../../modules/publicip"
  location         = "${var.location}"
  application_type = "${var.application_type}"
  resource_type    = "PUBLIC_IP"
  resource_group   = "${module.resource_group.resource_group_name}"
}

module "vm" {
  source                = "../../modules/vm"
  location              = "${var.location}"
  application_type      = "${var.application_type}"
  resource_type         = "VM"
  subnet_id             = "${module.network.subnet_id_test}"
  public_ip_address_id  = "${module.publicip.public_ip_address_id}"
  resource_group        = "${module.resource_group.resource_group_name}"
}

