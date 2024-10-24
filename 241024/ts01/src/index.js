var login = function (user) {
    switch (user.tag) {
        case "ADMIN": {
            console.log("".concat(user.name, "\uC740 \uAD00\uB9AC\uC790\uC774\uBA70, ").concat(user.kickCount, "\uD68C \uAD00\uB9AC\uD588\uC2B5\uB2C8\uB2E4."));
            break;
        }
        case "MEMBER": {
            console.log("".concat(user.name, "\uC740 \uB9F4\uBC84\uC774\uBA70, ").concat(user.point, "\uB97C \uC801\uB9BD\uD588\uC2B5\uB2C8\uB2E4."));
            break;
        }
        case "GUEST": {
            console.log("".concat(user.name, "\uC740 \uAC8C\uC2A4\uD2B8\uC774\uBA70, ").concat(user.visitCount, "\uBC88 \uBC29\uBB38\uD588\uC2B5\uB2C8\uB2E4."));
            break;
        }
    }
};
// const login = (user: User) => {
//   if ("kickCount" in user) {
//     console.log(`${user.name}은 관리자이며, ${user.kickCount}회 관리했습니다.`);
//   } else if ("point" in user) {
//     console.log(`${user.name}은 맴버이며, ${user.point}를 적립했습니다.`);
//   } else {
//     console.log(
//       `${user.name}은 게스트이며, ${user.visitCount}번 방문했습니다.`
//     );
//   }
// };
