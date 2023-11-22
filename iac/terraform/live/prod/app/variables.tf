##############################################################################
# AWS
##############################################################################

variable "region" {
  default = "us-east-1"
}

##############################################################################
# Terraform Remote State
##############################################################################

variable "s3_bucket" {
  type = string
}

variable "prod_base_env" {
  type = string
}
