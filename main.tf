module "s3" {
  source      = "./modules/s3"
  bucket_name = var.bucket_name
}

module "cloudfront" {
  source    = "./modules/cloudfront"
  s3_bucket = module.s3.bucket
}
module "iam" {
  source                  = "./modules/iam"
  s3_bucket               = module.s3.bucket
  cloudfront_distribution = module.cloudfront.distribution
}


