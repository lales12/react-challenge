type AccountMetadata = {
  logoUrl: string;
}

type Account = {
  id: string;
  name: string;
  address: string;
  password: string;
  meta: AccountMetadata
}


export const accountsList: Account[] = [
  {
    id: 'account-1',
    name: 'Account 1',
    address: '0x1',
    password: 'test1',
    meta: {
      logoUrl: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/thanos-2368734-1977096.png'
    }
  },
  {
    id: 'account-2',
    name: 'Account 2',
    address: '0x2',
    password: 'test2',
    meta: {
      logoUrl: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/thanos-2368734-1977096.png'
    }
  },
  {
    id: 'account-3',
    name: 'Account 3',
    address: '0x3',
    password: 'test3',
    meta: {
      logoUrl: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/thanos-2368734-1977096.png'
    }
  },
]