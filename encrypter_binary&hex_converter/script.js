const eng_btn = document.querySelector("#english-btn");
const tr_btn = document.querySelector("#turkish-btn");

const binary_to_num = document.querySelector("#binary-to-num");
const num_to_binary = document.querySelector("#num-to-binary");

const hex_to_num = document.querySelector("#hex-to-num");
const num_to_hex = document.querySelector("#num-to-hex");

const encrypted_btn = document.querySelector("#Encrypted-btn");

function langChange(s1, s2, s3, s4, s5, s6, s7, s8, s9, list10) {
    binary_to_num.textContent = s1;
    num_to_binary.textContent = s2;
    hex_to_num.textContent = s3;
    num_to_hex.textContent = s4;
    encrypted_btn.textContent = s5;
    document.querySelector(".nav-header").textContent = s6;
    const lang_arr = [s7, s8, s9];
    document.querySelectorAll(".binary-heading").forEach((element, index) => {
        element.textContent = lang_arr[index];
    });
    document.querySelectorAll(".block-1").forEach((element, index) => {
        element.textContent = list10[index];
    });
}

tr_btn.addEventListener("click", function() {
    langChange(
        "Binary'den Sayıya",
        "Sayıdan Binary'e",
        "Hex'ten Sayıya",
        "Sayıdan Hex'e",
        "Mesajını Şifrele",
        "Ako'nun Her Şey Dahil Sitesi",
        "Binary Hesaplayıcı",
        "Hex Hesaplayıcı",
        "Mesaj Şifreleyici", [
            "Binary Girin",
            "Çıktı:",
            "Sayı Girin",
            "Çıktı:",
            "Hex Girin",
            "Çıktı:",
            "Sayı Girin",
            "Çıktı:",
            "Mesaj Girin",
            "Anahtar:",
            "Çıktı",
        ]
    );
});

eng_btn.addEventListener("click", function() {
    langChange(
        "Binary to Number",
        "Number to Binary",
        "Hex to Number",
        "Number to Hex",
        "Encrypt Your Message",
        "Ako's All in One Page",
        "Binary Calculator",
        "Hex Calculator",
        "Encrypted Message"
    );
});

binary_to_num.addEventListener("click", function() {
    document.querySelector(".binaryTranslator").classList.remove("hidden");
});

num_to_binary.addEventListener("click", function() {
    document.querySelector(".numberTranslator").classList.remove("hidden");
});

hex_to_num.addEventListener("click", function() {
    document.querySelector(".hexTranslator").classList.remove("hidden");
});

num_to_hex.addEventListener("click", function() {
    document.querySelector(".hexNumTranslator").classList.remove("hidden");
});

encrypted_btn.addEventListener("click", function() {
    document.querySelector(".messageTranslator").classList.remove("hidden");
});

document.querySelectorAll(".modal-closeBtn").forEach((element) => {
    element.addEventListener("click", function() {
        document.querySelector(".binaryTranslator").classList.add("hidden");
        document.querySelector(".numberTranslator").classList.add("hidden");
        document.querySelector(".hexTranslator").classList.add("hidden");
        document.querySelector(".hexNumTranslator").classList.add("hidden");
        document.querySelector(".messageTranslator").classList.add("hidden");
    });
});

const binaryTo_input = document.querySelector("#binaryTo");
const numberTo_input = document.querySelector("#numberTo");
const hexTo_input = document.querySelector("#hexTo");
const hexNumberTo_input = document.querySelector("#hexNumTo");
const messageTo_input = document.querySelector("#messageTo");

document.querySelectorAll(".translateBtn").forEach((element, index) => {
    element.addEventListener("click", function() {
        if (index == 0) {
            const list0 = binaryTo_input.value.split("");
            console.log(list0);
            count0 = list0.length - 1;
            value0 = 0;
            list0.forEach((element) => {
                if (element == "1") {
                    value0 += Math.pow(2, count0);
                }
                count0--;
            });
            document.querySelector(".to-binary-output-p0").textContent = value0;
        } else if (index == 1) {
            let x1 = parseInt(numberTo_input.value);
            let list1 = [];
            while (x1 > 0) {
                let y1;
                for (let i = 1; i <= x1; i *= 2) {
                    y1 = i;
                }
                list1.push(y1);
                x1 -= y1;
            }

            count1 = 1;
            for (let i = list1[0]; i > 1; i /= 2) {
                count1++;
            }
            let binary_list1 = [];
            for (let i = 0; i < count1; i++) {
                binary_list1.push(0);
            }
            count1_1 = -1;

            binary_list1.forEach((element, index) => {
                count1_1++;
                if (list1.includes(Math.pow(2, count1_1))) {
                    binary_list1[binary_list1.length - 1 - index] = 1;
                }
            });

            let text1 = binary_list1.toString();
            newStr1 = text1.replaceAll(",", "");

            document.querySelector(".to-binary-output-p1").textContent = newStr1;
        } else if (index == 2) {
            const list2 = hexTo_input.value.split("");
            console.log(list2);

            hex_list2 = [];
            list2.forEach((element) => {
                switch (element) {
                    case "0":
                        hex_list2.push(0);
                        break;
                    case "1":
                        hex_list2.push(1);
                        break;
                    case "2":
                        hex_list2.push(2);
                        break;
                    case "3":
                        hex_list2.push(3);
                        break;
                    case "4":
                        hex_list2.push(4);
                        break;
                    case "5":
                        hex_list2.push(5);
                        break;
                    case "6":
                        hex_list2.push(6);
                        break;
                    case "7":
                        hex_list2.push(7);
                        break;
                    case "8":
                        hex_list2.push(8);
                        break;
                    case "9":
                        hex_list2.push(9);
                        break;
                    case "a":
                        hex_list2.push(10);
                        break;
                    case "b":
                        hex_list2.push(11);
                        break;
                    case "c":
                        hex_list2.push(12);
                        break;
                    case "d":
                        hex_list2.push(13);
                        break;
                    case "e":
                        hex_list2.push(14);
                        break;
                    case "f":
                        hex_list2.push(15);
                        break;
                    default:
                        console.log("switch-case error");
                }
            });
            console.log(hex_list2);
            const x2 = hex_list2.length;
            let value2 = 0;
            hex_list2.forEach((element, index) => {
                value2 += element * Math.pow(16, x2 - 1 - index);
            });
            document.querySelector(".to-binary-output-p2").textContent = value2;
        } else if (index == 3) {
            function numCalc(element) {
                switch (element) {
                    case 0:
                        return "0";
                    case 1:
                        return "1";
                    case 2:
                        return "2";
                    case 3:
                        return "3";
                    case 4:
                        return "4";
                    case 5:
                        return "5";
                    case 6:
                        return "6";
                    case 7:
                        return "7";
                    case 8:
                        return "8";
                    case 9:
                        return "9";
                    case 10:
                        return "a";
                    case 11:
                        return "b";
                    case 12:
                        return "c";
                    case 13:
                        return "d";
                    case 14:
                        return "e";
                    case 15:
                        return "f";
                    default:
                        console.log("switch-case error");
                }
            }
            let x3 = parseInt(hexNumberTo_input.value);
            let list3 = [];
            let list3_last = [];
            let y3;
            let z = 1;
            let string3 = "";
            let m3;
            while (x3 > 0) {
                z *= 16;
                y3 = x3 % z;
                x3 -= y3;

                list3.unshift(y3);
            }
            console.log(list3);
            list3.forEach((element, index) => {
                let k3 = Math.pow(16, list3.length - 1 - index);

                list3_last.push(element / k3);
            });
            console.log(list3_last);
            list3_last.forEach((element) => {
                m3 = numCalc(element);
                string3 += m3;
            });
            console.log(string3);
            document.querySelector(".to-binary-output-p3").textContent = string3;
        } else if (index == 4 || index == 5) {
            let keywords = [
                ["q", 757],
                ["w", 1597],
                ["e", 2161],
                ["r", 2971],
                ["t", 3709],
                ["y", 4561],
                ["u", 5483],
                ["ı", 6217],
                ["o", 6947],
                ["p", 7639],
                ["ğ", 8629],
                ["ü", 9521],
                ["a", 10193],
                ["s", 10939],
                ["d", 11831],
                ["f", 12391],
                ["g", 13037],
                ["h", 13691],
                ["j", 14479],
                ["k", 15131],
                ["l", 16001],
                ["ş", 16879],
                ["i", 17389],
                ["z", 18131],
                ["x", 18787],
                ["c", 19777],
                ["v", 20347],
                ["b", 20899],
                ["n", 21661],
                ["m", 22171],
                ["ö", 23063],
                ["ç", 24061],
                ["1", 24709],

                ["2", 25321],
                ["3", 26111],
                ["4", 26903],
                ["5", 27449],
                ["6", 28789],
                ["7", 29437],
                ["8", 30103],
                ["9", 31051],
                ["<", 31699],
                [">", 32707],
                [".", 33331],
                [",", 34213],
                [";", 34807],
                ["'", 35527],
                ['"', 36571],
                ["#", 37181],
                ["@", 38119],
                ["+", 39341],
                ["-", 40499],
                ["*", 41519],
                ["/", 42509],
                ["_", 43609],
                ["=", 44533],
                ["(", 45979],
                [")", 47309],
                ["{", 48163],
                ["}", 49537],
                ["[", 50333],
                ["]", 51487],
                ["%", 52903],
                ["$", 54503],
                ["%", 55079],
                ["!", 56131],
                ["?", 57241],
                [" ", 58549],
            ];
            let keywords_dynamic = [
                "q",
                "w",
                "e",
                "r",
                "t",
                "y",
                "u",
                "ı",
                "o",
                "p",
                "ğ",
                "ü",
                "a",
                "s",
                "d",
                "f",
                "g",
                "h",
                "j",
                "k",
                "l",
                "ş",
                "i",
                "z",
                "x",
                "c",
                "v",
                "b",
                "n",
                "m",
                "ö",
                "ç",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "<",
                ">",
                ".",
                ":",
                ",",
                ";",
                "'",
                '"',
                "#",
                "@",
                "+",
                "-",
                "*",
                "/",
                "_",
                "=",
                "(",
                ")",
                "{",
                "}",
                "[",
                "]",
                "%",
                "$",
                "%",
                "!",
                "?",
                " ",
            ];

            // rastgele key değer verip bu değeri keywordVAlues ile toplar ve liste uzunluğuna böler.
            // daha sonra her key bir solundaki key ile toplanır

            let message_value = document.querySelector("#messageTo").value;
            let keywordInput_list = message_value.split("");

            if (index == 4) {
                let key4 = document.querySelector("#message-key-input").value;
                keywordInput_list.forEach((element) => {
                    keywords_dynamic.push(element);
                });
                console.log(keywords_dynamic);
                for (let i = keywords.length; i < keywords_dynamic.length; i--) {}
            } else {
                let key = Math.floor(Math.random() * 1000000);
                let num;
                console.log(keywordInput_list);
                newKeyNumList = [];
                newKey = "";
                keywordInput_list.forEach((element, index) => {
                    keywords.forEach((e) => {
                        if (e[0] == element) {
                            num = (e[1] * key) % keywords_dynamic.length;
                            keywords_dynamic.push(element);
                            console.log(keywords_dynamic.length);
                            newKeyNumList.push(num);
                        }
                    });
                });
                console.log(newKeyNumList);
                newKeyNumList.forEach((element) => {
                    newKey += keywords_dynamic[element];
                });
                document.querySelector(".to-binary-output-p4").textContent = newKey;
                console.log(keywords_dynamic);
                alert(`key:${key}`);
            }
        } else {
            console.log("error if else");
        }
    });
});