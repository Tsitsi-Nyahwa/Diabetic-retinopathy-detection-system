import { PillVariant } from "@/components/Pill";
import { styles } from "@/styles";
import one from "@/styles/games/guess_the_number/1.png";
import twelve from "@/styles/games/guess_the_number/12.png";
import fourteen from "@/styles/games/guess_the_number/14.png";
import fifteen from "@/styles/games/guess_the_number/15.png";
import two from "@/styles/games/guess_the_number/2.png";
import three from "@/styles/games/guess_the_number/3.png";
import four from "@/styles/games/guess_the_number/4.png";
import seven from "@/styles/games/guess_the_number/7.png";
import nine from "@/styles/games/guess_the_number/9.png";
import GAME_ONE_OD from "@/styles/games/odd_one_out/game1/odd.png";
import GAME_ONE_OG from "@/styles/games/odd_one_out/game1/og.png";
import GAME_TWO_OD from "@/styles/games/odd_one_out/game2/odd.png";
import GAME_TWO_OG from "@/styles/games/odd_one_out/game2/og.png";
import GAME_THREE_OD from "@/styles/games/odd_one_out/game3/odd.png";
import GAME_THREE_OG from "@/styles/games/odd_one_out/game3/og.png";
import GAME_FOUR_OD from "@/styles/games/odd_one_out/game4/odd.png";
import GAME_FOUR_OG from "@/styles/games/odd_one_out/game4/og.png";
import GAME_FIVE_OD from "@/styles/games/odd_one_out/game5/odd.png";
import GAME_FIVE_OG from "@/styles/games/odd_one_out/game5/og.png";
import GAME_SIX_OD from "@/styles/games/odd_one_out/game6/odd.png";
import GAME_SIX_OG from "@/styles/games/odd_one_out/game6/og.png";
import GAME_SEVEN_OD from "@/styles/games/odd_one_out/game7/odd.png";
import GAME_SEVEN_OG from "@/styles/games/odd_one_out/game7/og.png";
import { Badge, CubeColors, Game, GuessNumberImages, Odd, Selections, SequencePuzzle } from "@/types";
import { Boxes, CaseUpper, CircleArrowOutDownLeft, ScanEye, Sigma } from "lucide-react-native";

export const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
export const GuessTheNumber = "Guess the number";
export const OddOneOut = "Odd one out";
export const FocusShift = "Focus Shift";
export const ColorCube = "Color Cube";
export const SequenceOfLetters = "Sequence of Letters"
export const NewHighScore = "New HighScore"

export const SEVERITY_LEVELS: Record<string, PillVariant> = {
  "No DR": "success",
  "Mild": "warning",
  "Moderate": "warning",
  "Severe": "danger",
  "Proliferative DR": "danger",
};


export const BADGES: Badge[] = [
    {
        badgeName : "Math Count",
        slug : "math_count",
        game : GuessTheNumber,
        achieved : false
    },
    {
        badgeName : "Spotter",
        slug : "spotter",
        game : OddOneOut,
        achieved : false       
    },
    {
        badgeName : "Prism Pro",
        slug :"prism_pro",
        game : ColorCube,
        achieved : false
    },
    {
        badgeName : "Letter Legend",
        slug : "letter_legend",
        game : SequenceOfLetters,
        achieved : false
    }
]
export const GAMES: Game[] = [
  {
    name: ColorCube,
    points: 0,
    color: styles.bg_purple.backgroundColor,
    page: "/Rewards/ColorCube",  
    Icon: Boxes,
    total : 1000

  },
  {
    name: GuessTheNumber,
    points: 0,
    color: styles.bg_amber.backgroundColor,
    page: "/Rewards/GuessTheNumber", 
    Icon: Sigma,
    total : 900
  },
  {
    name: OddOneOut,
    points: 0,
    color: styles.bg_blue.backgroundColor,
    page: "/Rewards/OddOneOut", 
    total :700,
    Icon: CircleArrowOutDownLeft,
  },
  {
    name: SequenceOfLetters,
    points: 0,
    color: "#f83600",
    page: "/Rewards/SequenceOfLetters", 
    Icon: CaseUpper,
    total: 1000
  },  
  {
    name: FocusShift,
    points: 0,
    color: styles.bg_danger.backgroundColor,
    page: "/Rewards/FocusShift", 
    Icon: ScanEye,

  }
];

export const SEQUENCE_LETTERS: SequencePuzzle[] = [
  {
    sequence: "ABCDE",
    options: [
      { option: "ABCDF", isCorrect: false },
      { option: "ABCDEE", isCorrect: false },
      { option: "ABCDE", isCorrect: true },
    ],
  },
  {
    sequence: "ZYXW",
    options: [
      { option: "ZYXX", isCorrect: false },
      { option: "ZYXW", isCorrect: true },
      { option: "ZYXY", isCorrect: false },
    ],
  },
  {
    sequence: "HIKLM",
    options: [
      { option: "HIKLMN", isCorrect: false },
      { option: "HIKLM", isCorrect: true },
      { option: "HIJLM", isCorrect: false },
    ],
  },
  {
    sequence: "PQRST",
    options: [
      { option: "PQRST", isCorrect: true },
      { option: "PQRSV", isCorrect: false },
      { option: "PQRTSU", isCorrect: false },
    ],
  },
  {
    sequence: "GHIJ",
    options: [
      { option: "GHIJI", isCorrect: false },
      { option: "GHIJJ", isCorrect: false },
      { option: "GHIJ", isCorrect: true },
    ],
  },
  {
    sequence: "BCCDD",
    options: [
      { option: "BCCDE", isCorrect: false },
      { option: "BCDEE", isCorrect: false },
      { option: "BCCDD", isCorrect: true },
    ],
  },
  {
    sequence: "UVWX",
    options: [
      { option: "UVWY", isCorrect: false },
      { option: "UVWX", isCorrect: true },
      { option: "UVWXYZ", isCorrect: false },
    ],
  },
  {
    sequence: "LMNOP",
    options: [
      { option: "LMNOP", isCorrect: true },
      { option: "LMNPQ", isCorrect: false },
      { option: "LMNOPR", isCorrect: false },
    ],
  },
  {
    sequence: "AABBC",
    options: [
      { option: "AABCD", isCorrect: false },
      { option: "AABBC", isCorrect: true },
      { option: "AABBCC", isCorrect: false },
    ],
  },
  {
    sequence: "RSTU",
    options: [
      { option: "RSTUW", isCorrect: false },
      { option: "RSTU", isCorrect: true },
      { option: "RSTUVW", isCorrect: false },
    ],
  },
  {
    sequence: "DEFGG",
    options: [
      { option: "DEFGG", isCorrect: true },
      { option: "DEFGHH", isCorrect: false },
      { option: "DEGFH", isCorrect: false },
    ],
  },
  {
    sequence: "MNNOP",
    options: [
      { option: "MNNOQ", isCorrect: false },
      { option: "MNNPQ", isCorrect: false },
      { option: "MNNOP", isCorrect: true },
    ],
  },
  {
    sequence: "ABCAB",
    options: [
      { option: "ABCAC", isCorrect: false },
      { option: "ABCABC", isCorrect: false },
      { option: "ABCAB", isCorrect: true },
    ],
  },
  {
    sequence: "QRSTU",
    options: [
      { option: "QRSTV", isCorrect: false },
      { option: "QRSTU", isCorrect: true },
      { option: "QRTUV", isCorrect: false },
    ],
  },
  {
    sequence: "KLLM",
    options: [
      { option: "KLLMN", isCorrect: false },
      { option: "KLM", isCorrect: false },
      { option: "KLLM", isCorrect: true },
    ],
  },
  {
    sequence: "NNOOP",
    options: [
      { option: "NNOOP", isCorrect: true },
      { option: "NNOOPR", isCorrect: false },
      { option: "NNOOQ", isCorrect: false },
    ],
  },
  {
    sequence: "RRPRR",
    options: [
      { option: "RPRRR", isCorrect: false },
      { option: "RRRRR", isCorrect: false },
      { option: "RRPRR", isCorrect: true },
    ],
  },
  {
    sequence: "HIJJK",
    options: [
      { option: "HIJJK", isCorrect: true },
      { option: "HIJJKM", isCorrect: false },
      { option: "HIJKL", isCorrect: false },
    ],
  },
  {
    sequence: "VWXY",
    options: [
      { option: "VWXYZ", isCorrect: false },
      { option: "VWXY", isCorrect: true },
      { option: "VWXXY", isCorrect: false },
    ],
  },
  {
    sequence: "OPQR",
    options: [
      { option: "OPQRT", isCorrect: false },
      { option: "OPQR", isCorrect: true },
      { option: "OPQSR", isCorrect: false },
    ],
  },
  {
    sequence: "SSST",
    options: [
      { option: "SSTT", isCorrect: false },
      { option: "SSST", isCorrect: true },
      { option: "SSSTV", isCorrect: false },
    ],
  },
  {
    sequence: "CDEFG",
    options: [
      { option: "CDEFG", isCorrect: true },
      { option: "CDEFGI", isCorrect: false },
      { option: "CDFEGH", isCorrect: false },
    ],
  },
  {
    sequence: "UUVW",
    options: [
      { option: "UUVWX", isCorrect: false },
      { option: "UUVW", isCorrect: true },
      { option: "UUWWX", isCorrect: false },
    ],
  },
  {
    sequence: "IJKLM",
    options: [
      { option: "IJKLN", isCorrect: false },
      { option: "IJKLM", isCorrect: true },
      { option: "IJKLMN", isCorrect: false },
    ],
  },
  {
    sequence: "WXYY",
    options: [
      { option: "WXYYZ", isCorrect: false },
      { option: "WXYZ", isCorrect: false },
      { option: "WXYY", isCorrect: true },
    ],
  },
  {
    sequence: "NOPQ",
    options: [
      { option: "NOPQ", isCorrect: true },
      { option: "NOPQS", isCorrect: false },
      { option: "NOPQRR", isCorrect: false },
    ],
  },
  {
    sequence: "FGGHH",
    options: [
      { option: "FGGHI", isCorrect: false },
      { option: "FGGHHH", isCorrect: false },
      { option: "FGGHH", isCorrect: true },
    ],
  },
  {
    sequence: "RRSST",
    options: [
      { option: "RRSST", isCorrect: true },
      { option: "RRSSTT", isCorrect: false },
      { option: "RRSSTV", isCorrect: false },
    ],
  },
  {
    sequence: "ACEG",
    options: [
      { option: "ACEG", isCorrect: true },
      { option: "ACEGH", isCorrect: false },
      { option: "ACEGG", isCorrect: false },
    ],
  },
  {
    sequence: "MMNNM",
    options: [
      { option: "MMNMM", isCorrect: true },
      { option: "MMNNMM", isCorrect: false },
      { option: "MNMMM", isCorrect: false },
    ],
  },
];
export const CUBE_COLORS: CubeColors[] = [
  { mainColor: "#CDE7FF", feintColor: "#DBEEFF" },
  { mainColor: "#C1D7E2", feintColor: "#D2E3EA" },
  { mainColor: "#CDF5FF", feintColor: "#DBF8FE" },
  { mainColor: "#FFD6E0", feintColor: "#FFE0E8" },
  { mainColor: "#FFE6CC", feintColor: "#FFEED9" },
  { mainColor: "#FFF5CC", feintColor: "#FFF9D9" },
  { mainColor: "#E0FFD6", feintColor: "#E8FFE0" },
  { mainColor: "#CCFFE6", feintColor: "#D9FFEE" },
  { mainColor: "#E6CCFF", feintColor: "#EED9FF" },
  { mainColor: "#D6CCFF", feintColor: "#E0D9FF" },
  { mainColor: "#FFCCF9", feintColor: "#FFD9FA" },
  { mainColor: "#CCE5FF", feintColor: "#D9EBFF" },
  { mainColor: "#FFDACC", feintColor: "#FFE3D9" },
  { mainColor: "#CCFFF5", feintColor: "#D9FFFA" },
  { mainColor: "#F5FFCC", feintColor: "#F9FFDB" },
  { mainColor: "#E6F0CC", feintColor: "#ECF5D9" },
  { mainColor: "#FFD1CC", feintColor: "#FFDAD9" },
  { mainColor: "#CCE8FF", feintColor: "#D9EFFF" },
  { mainColor: "#D1FFD6", feintColor: "#DAFFE0" },
  { mainColor: "#FFECCC", feintColor: "#FFF2D9" },
  { mainColor: "#E0E6FF", feintColor: "#E8EBFF" },
  { mainColor: "#FFD6CC", feintColor: "#FFE0D9" },
  { mainColor: "#CCFFF0", feintColor: "#D9FFF5" },
  { mainColor: "#E6FFCC", feintColor: "#EEFFD9" },
  { mainColor: "#FFCCE6", feintColor: "#FFD9EE" },
  { mainColor: "#CCE0FF", feintColor: "#D9E6FF" },
  { mainColor: "#FFF0CC", feintColor: "#FFF5D9" },
  { mainColor: "#CCE6E0", feintColor: "#D9EBE6" },
  { mainColor: "#F0CCFF", feintColor: "#F5D9FF" },
  { mainColor: "#CCE6F5", feintColor: "#D9EBF9" }
];

export const IMAGES_GUESS: GuessNumberImages[] = [
  {
    image: one,
    value : 1,
    options :[11, 7, 1]
  },
  {
    image :  two,
    value : 2, 
    options :[2, 4, 7] 
  },
  {
    image : three, 
    value : 3, 
    options : [8, 3, 9]
  },
  {
    image : four,
    value : 4,
    options : [7, 5, 4]
  }, 
  {
    image : seven,
    value : 7,
    options : [17, 7, 11]
  },
  {
    image : nine,
    value : 9,
    options : [8, 9, 3]
  },
  {
    image : twelve,
    value : 12,
    options : [12, 22, 17]
  },
  {
    image : fourteen,
    value : 14,
    options : [15, 14, 4]
  },
  {
    image : fifteen,
    value : 15,
    options : [5, 15, 75]
  }
]

export const IMAGES_ODD: Odd[] = [
  {
    OD : GAME_ONE_OD,
    OG : GAME_ONE_OG
  },
  {
    OD : GAME_TWO_OD,
    OG : GAME_TWO_OG
  },
  {
    OD : GAME_THREE_OD,
    OG : GAME_THREE_OG
  },
  {
    OD : GAME_FOUR_OD,
    OG : GAME_FOUR_OG
  },
  {
    OD : GAME_FIVE_OD,
    OG : GAME_FIVE_OG
  },
  {
    OD : GAME_SIX_OD,
    OG : GAME_SIX_OG
  },{
    OD : GAME_SEVEN_OD,
    OG : GAME_SEVEN_OG
  }
]

export const DIABETICS:Selections[] = [
  {value: "Type 1", label : "Type 1"},
  {value: "Type 2", label : "Type 2"},
  {value: "Gestational Diabetes", label : "Gestational Diabetes"},
  {value: "Prediabetes", label : "Prediabetes"},
  {value : "Monogenic Diabetes", label : "Monogenic Diabetes"}
]
export const GAME_STORE_VALUES: Record<string, string> = {
  [SequenceOfLetters]: "SEQUENCE_OF_LETTERS",
  [OddOneOut] : "ODD_ONE_OUT",
  [GuessTheNumber] : "GUESS_THE_NUMBER",
  [FocusShift] : "FOCUS_SHIFT",
  [ColorCube] : "COLOR_CUBE"
};
