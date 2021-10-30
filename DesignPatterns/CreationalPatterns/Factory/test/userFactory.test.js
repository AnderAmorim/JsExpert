const rewiremock = require("rewiremock/node");
const { deepStrictEqual } = require("assert");

//poderia estar em outro arquivo
const dbData = [{ name: "Mariazinha" }, { name: "Joãozinho" }];
class MockDatabase {
  connect = () => this;
  find = async (query) => dbData;
}
//Interceptando o objeto(mockando ele), evitando que o teste dependa de internet ou outra coisa externa
rewiremock(() => require("./../src/util/database")).with(MockDatabase);
(async () => {
  {
    const expected = [{ name: "MARIAZINHA" }, { name: "JOÃOZINHO" }];
    rewiremock.enable();
    //O require deve ser feito aqui para o wiremock funcionar
    const UserFactory = require("../src/factory/userFactory");
    const userFactory = await UserFactory.createInstance();
    const result = await userFactory.find();
    deepStrictEqual(result, expected);
    rewiremock.disable();
  }
  {
    //sem usar rewiremock
    const expected = [{ name: "ERICKWENDEL" }];
    // const expected = [{ name: "MARIAZINHA" }, { name: "JOÃOZINHO" }];

    const UserFactory = require("../src/factory/userFactory");
    const userFactory = await UserFactory.createInstance();
    const result = await userFactory.find();
    deepStrictEqual(result, expected);
  }
})();
