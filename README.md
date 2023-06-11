# openfaas-bun-template

Ready-to-use template for bootstraping a bun function for openfaas!

## Usage

```sh
faas-cli template pull https://github.com/patlux/openfaas-bun-template
# creates a template/bun folder in the current directory
faas-cli new my-fancy-bun --lang bun
# creates my-fancy-bun.yml and my-fancy-bun/

# To upload the function:
faas-cli up -f my-fancy-bun.yml
```

## Getting Started

1. Setup openfaas on your server
2. Install [openfaas-cli](https://github.com/openfaas/faas-cli) on your local machine
3. Login into your server with faas-cli
4. Follow the instructions in "Usage"



