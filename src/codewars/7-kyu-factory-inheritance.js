const constructionWorker = (
  firstName,
  lastName,
  age,
  gender,
  married,
  boss
) => {
  let obj = person(
    firstName,
    lastName,
    age,
    gender,
    (employed = true),
    (occupation = "construction worker"),
    married
  );
  obj.boss = boss;
  obj.sayBossName = function () {
    return `My boss is called ${obj.boss} and is a very nice person!`;
  };

  return obj;
};
