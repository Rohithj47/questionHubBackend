import { sequelize, User } from '../database.js';


beforeAll(async () => {
    await sequelize.sync({
        force: true
    })
})

test('create user', async () => {
    expect.assertions(1);
    const user = await User.create({
        id: 1,
        firstName: 'Bobby',
        lastName: 'Lee'
    });
    expect(user.id).toEqual(1);
})

test('get user', async () => {
    expect.assertions(2);
    const user = await User.findByPk(1);
    expect(user.firstName).toEqual('Bobby');
    expect(user.lastName).toEqual('Lee');
});

test('delete user', async () => {
    expect.assertions(1);
    await db.User.destroy({
        where: {
            id: 1
        }
    });
    const user = await db.User.findByPk(1);
    expect(user).toBeNull();
});

afterAll(async () => {
    sequelize.close();
})