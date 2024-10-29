import { MissionUtils } from "@woowacourse/mission-utils";
const SEPARATOR1 = ",";
const SEPARATOR2 = ":";
const GUIDE_MESSAGE_INPUT_NUMBERS_WITH_SEPARATOR =
  "덧셈할 문자열을 입력해 주세요.\n";
const ERROR_MESSAGE_NO_SAPARATOR =
  "[ERROR] 구분자가 없습니다. 프로그램을 종료합니다.";
class App {
  async run() {
    let numberStr = await this.getNumbersWithSeparator();

    if (this.hasStringIncludesSeparator(numberStr)) {
      // 구분자가 있으면
      let numbers = numberStr.split(/\,|\:/); // 배열 반환됨
      // console.log(`분리한 숫자배열 : ${numbers}`);
    }
  }

  getNumbersWithSeparator() {
    // 문자열 입력받는 함수
    let numberStr = MissionUtils.Console.readLineAsync(
      GUIDE_MESSAGE_INPUT_NUMBERS_WITH_SEPARATOR
    );
    return numberStr;
  }

  hasStringIncludesSeparator(numberStr) {
    // 문자열이 구분자를 포함하는지 확인하는 함수
    if (numberStr.includes(SEPARATOR1, SEPARATOR2)) {
      return true;
    } else throw new Error(ERROR_MESSAGE_NO_SAPARATOR); // 없으면 에러발생
  }
}

export default App;
