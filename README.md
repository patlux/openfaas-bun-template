# openfaas-bun-template

Ready-to-use template for bootstraping a bun function for [openfaas](https://www.openfaas.com)!

## Usage

```sh
# Create a folder just for your faas functions:
mkdir -p ~/dev/faas
cd ~/dev/faas

# Now download the template
faas-cli template pull https://github.com/patlux/openfaas-bun-template
# -> creates a template/bun folder in the current directory

# Replace "my-fance-bun" with a name of your choice
faas-cli new my-fancy-bun --lang bun
# -> creates my-fancy-bun.yml and my-fancy-bun/

# To upload the function:
faas-cli up -f my-fancy-bun.yml

# At the end your folder should look like the following:
~/dev/faas
├── my-fancy-bun
│   ├── README.md
│   ├── bun.lockb
│   ├── index.ts
│   ├── package.json
│   └── tsconfig.json
├── my-fancy-bun.yml
└── template
    └── bun
        ├── Dockerfile
        ├── function
        ├── package.json
        └── template.yml
```

## Getting Started

If you don't know `openfaas`, please checkout https://www.openfaas.com.

1. Setup openfaas on your server
2. Install [openfaas-cli](https://github.com/openfaas/faas-cli) on your local machine
3. Login into your server with faas-cli
4. Follow the instructions in "Usage"
