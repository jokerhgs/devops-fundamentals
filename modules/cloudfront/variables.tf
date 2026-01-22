variable "s3_bucket" {
  type = object({
    bucket_regional_domain_name = string
    id                          = string
  })
}
