import { faker } from '@faker-js/faker';
import shortId from 'shortid';
import { rest } from 'msw';

export const ClientHandler = [
    rest.get('https:/fruitte.co/api/goods', async (req, res, ctx) => {
        const page = req.url.searchParams.get('page');

        const dummyProdAll = {
            totalPage: 15,
            currentPage: page,
            data: Array(10)
                .fill()
                .map(() => ({
                    id: shortId.generate(),
                    prodImg: { src: faker.image.image() },
                    prodName: faker.lorem.words(),
                    prodPrice: faker.commerce.price(20000, 30000, 0),
                    salePrice: faker.commerce.price(10000, 20000, 0),
                    salfFlag: faker.datatype.number({ min: 0, max: 1 }),
                    mdFlag: faker.datatype.number({ min: 0, max: 1 }),
                    soldFlag: faker.datatype.number({ min: 0, max: 1 }),
                    previewCount: faker.datatype.number({ min: 0, max: 10 }),
                })),
        };

        return res(ctx.json(dummyProdAll));
    }),

    rest.get('https:/fruitte.co/api/goods/:goodsId', async (req, res, ctx) => {
        const goodsId = req.params.goodsId;
        const dummyProd = {
            id: goodsId,
            prodImg: { src: faker.image.image() },
            subImg: Array(faker.datatype.number({ min: 1, max: 5 }))
                .fill()
                .map((_, idx) => ({ id: idx, src: faker.image.image() })),
            prodName: faker.lorem.words(faker.datatype.number({ min: 3, max: 5 })),
            prodPrice: faker.commerce.price(20000, 30000, 0),
            salePrice: faker.commerce.price(10000, 20000, 0),
            salfFlag: faker.datatype.number({ min: 0, max: 1 }),
            mdFlag: faker.datatype.number({ min: 0, max: 1 }),
            soldFlag: faker.datatype.number({ min: 0, max: 1 }),
            option: {
                detail: faker.lorem.lines(),
                origin: faker.lorem.word(),
                delivery: faker.datatype.number({ min: 0, max: 1 }),
            },
            choice: Array(faker.datatype.number({ min: 1, max: 3 }))
                .fill()
                .map(() => ({
                    name: faker.commerce.product(),
                    price: faker.commerce.price(10000, 20000, 0),
                })),
            preview: Array(faker.datatype.number({ min: 1, max: 3 }))
                .fill()
                .map(() => ({
                    point: faker.datatype.number({ min: 1, max: 5 }),
                    content: faker.lorem.paragraph(),
                    price: faker.commerce.price(10000, 20000, 0),
                    user: {
                        name: faker.name.findName(),
                        createdAt: faker.date.between(
                            '2022-07-01T00:00:00.000Z',
                            '2022-09-04T00:00:00.000Z',
                        ),
                        payment: faker.datatype.number({ min: 0, max: 1 }),
                    },
                })),
        };
        return res(ctx.json(dummyProd));
    }),
];
