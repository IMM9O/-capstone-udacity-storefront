# Infrastructure

The web is hosted on AWS using simple infrastructure to host the UI on S3, The API on the elastic beanstalk, the database on RDS, and CircleCI to automate the deployment.

<p align="center">
<img src="./assets/images/infrastructures.png" alt="infrastructure diagram" />
<p align="center">AWS Infrastructure</p>
</p>


# AWS Configuration

## IAM User

### Steps

- Go to [IAM](https://console.aws.amazon.com/iamv2/home?#/home) - Identity and Access Management (IAM)
- Select `Users` -> Click `Add user`
- Under `Select AWS access type` section mark `Access key - Programmatic access`
- Click `Next: Permissions`
- Under `Set permissions` section select user `Group` the user that has `AdministratorAccess` policies.
- If the user not exist click on `Create Group` and add name with `AdministratorAccess` police.   
- Then click on `Next: Tags` -> Skip tags as it is options -> Then click on `Next: Review`
- Finally click on `Create user`
- After that you will got two keys keep it save as we will use it with CircleCI.
    - AWS_ACCESS_KEY_ID
    - AWS_SECRET_ACCESS_KEY
    - AWS_DEFAULT_REGION
## RDS

![RDS Screenshot](./assets/images/rds-screenshot.png)



## Elastic Beanstalk

![EBS Screenshot](./assets/images/ebs-screenshot.png)
![EBS Screenshot](./assets/images/ebs-env-screenshot.png)

### Pre-requisites

1. You must have the AWS and the EB CLI installed. Pretty straightforward tutorials [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html) and [here](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html).

2. Have a Node.js app ready to be deployed. You can create a sample app with [express-generator](https://expressjs.com/en/starter/generator.html).

### Steps 

1. Create an elastic beanstalk (EB) app and environment [here](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.environments.html).
2. Create the deploy script. **Note:** The $NAME would automatically come from the CircleCi. This command will deploy then set environments variables.

```bash
# replace env name with your environment name
eb use ${ENV_NAME} --profile default
eb deploy --profile default
eb setenv AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID AWS_REGION=$AWS_DEFAULT_REGION SECRET_ACCESS_KEY_ID=$AWS_SECRET_ACCESS_KEY --profile default
eb health
```

3. Create a file `config,yml` under `.elasticbeanstalk` folder and fill it with this configuration.

```yml
branch-defaults:
  default:
    environment: ${ENV_NAME} # replace it with your environment name
    group_suffix: null
deploy:
  artifact: dist/dist.zip
global:
  application_name: ${APP_NAME} # replace it with your app name
  branch: null
  default_ec2_keyname: vockey
  default_platform: Node.js
  default_region: us-east-1 # replace it with your default region
  include_git_submodules: true
  instance_profile: null
  platform_name: null
  platform_version: null
  profile: default # default profile unless you set up a new profile change it.
  repository: null
  sc: git
  workspace_type: Application
```

### Edge cases

When deploying to Elastic Beanstalk running Node >= 8.x, node-gyp doesn't have sufficient permissions to write to the tmp directory. bcrypt won't install and the application deployment will fail.

This issue happen with [sharp](https://www.npmjs.com/package/sharp), [bcrypt](https://www.npmjs.com/package/bcrypt) packages, and other packages which require elevated permissions.

**Solution 1:** A workaround is to add a .npmrc file to the root of your project that will force node-gyp to run as root and allow the installation to complete. 
File contents for .npmrc:

```bash
# Force npm to run node-gyp also as root, preventing permission denied errors in AWS with npm@5 or @6
unsafe-perm=true
```

**Solution 2:** Use alternative libraries

- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [bcrypt-node](https://www.npmjs.com/package/bcrypt-node)

## S3

![S3 Screenshot](./assets/images/s3-screenshot.png)

### Steps 

1. Create Bucket first through this [link](https://s3.console.aws.amazon.com/s3/home)
2. Add this rule `Bucket policy` 

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:PutObject",
                "s3:PutObjectAcl",
                "s3:GetObject",
                "s3:GetObjectAcl"
            ],
            "Resource": "arn:aws:s3:::<BUCKET_NAME>/*"
        }
    ]
}
```

3. Deploy script

```bash
# Replace BUCKET_NAME with your bucket name
aws s3 cp --recursive ./client/build s3://<BUCKET_NAME>/
```

4. Configure CircleCI

First go to Project Page -> Project Settings -> Environment Variables then Add those variables.

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_DEFAULT_REGION

