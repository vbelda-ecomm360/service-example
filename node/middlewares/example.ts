export async function example(ctx: Context, next: () => Promise<any>) {

  // You should get your product skus here, for this example we have them hardcoded
  const productSkus = ["859991622690", "859991621450", "869991608840", "856439296010"]

  // We're searching by sku, but the client also has other functions to search by id o reference
  const data = await ctx.clients.search.productsBySku(productSkus)

  ctx.body = data

  await next()
}
