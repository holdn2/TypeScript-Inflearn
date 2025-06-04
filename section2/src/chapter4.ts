// 타입 별칭 (type alias)
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "유찬영",
  nickname: "holdn2",
  birth: "2001.03.30",
  bio: "안녕하세요",
  location: "서울",
};

// 인덱스 시그니쳐 : key와 value의 타입을 기준으로 규칙을 이용해서 유연하게 객체의 타입을 지정한다.
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};
// 만약에 빈 객체여도 에러가 나지 않는다. 인덱스 시그니쳐에 어긋나지만 않으면 에러가 아니라고 나오기 때문이다.

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 반드시 필요한 prop은 이렇게 추가해주면 된다.
};
// let countryNumberCodes: CountryNumberCodes = {}; 이러면 에러가 난다.
let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
