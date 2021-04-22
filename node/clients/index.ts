import { IOClients } from '@vtex/api'
// These are vtex ready to use clients, check them here https://github.com/vtex/io-clients
import { Catalog , Search } from '@vtex/clients'

export class Clients extends IOClients {
    public get catalog() {
        return this.getOrSet('catalog', Catalog)
    }
    // Only using this client in this example, but you can use more
    public get search() {
      return this.getOrSet('search', Search)
  }
}
