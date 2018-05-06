let model = require('../../components/models/basic-mvclh-model');

let tressa = require('../../testing-tools/tressa');


tressa.title("Test model");

// 1
tressa.assert(0 == model.getLastResult(), "case1 default value");

// 2
model.setLastResult(9)
tressa.assert(9 == model.getLastResult(), "case2 reset LastResult")