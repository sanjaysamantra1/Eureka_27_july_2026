import asyncio

async def get_user():
    await asyncio.sleep(2)
    return {"name": "John"}

async def get_orders():
    await asyncio.sleep(2)
    return ["Order 1", "Order 2"]

async def main():
    user = await get_user()
    order = await get_orders()
    print(user)
    print(order)
    
asyncio.run(main())