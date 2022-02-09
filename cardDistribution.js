const inputData = [
    { name: 'Mr. Rashid', birthYear: 1999, currentYear: 2022, district: 'Dhaka', postNo: 1200, priority: 2 },
    { name: 'Mr. Rashid', birthYear: 1993, currentYear: 2022, district: 'Dhaka', postNo: 1200, priority: 2 },
    { name: 'Mr. Raju', birthYear: 1995, currentYear: 2022, district: 'Rajshahi', postNo: 1211, priority: 1 },
];


function cardDistribution(inputData) {
    let serialCounter = 1;
    const result = inputData.map(item => {
        const districtName = item.district.substring(0, 2).toUpperCase();
        const currentYear = item.currentYear.toString().substring(2, 4);
        const birthYear = item.birthYear.toString();
        const postNo = item.postNo.toString().substring(0, 2);
        const cardNumber = districtName + currentYear + postNo + birthYear;
        const gift = (serialCounter % 2 == 0) ? 'R' : 'W';
        let serialNumber = (serialCounter++).toString();
        const serialNumberWithPadding = serialNumber.padStart(16 - cardNumber.length, '0');
        const cardNumberWithPadding = cardNumber + serialNumberWithPadding;

        return { cardNumber: cardNumberWithPadding, gift, priority: item.priority };
    });


    const resultSortedByCardNumber = result.sort((a, b) => {
        return a.cardNumber.localeCompare(b.cardNumber);
    });

    const resultSortedByPriority = resultSortedByCardNumber.sort((a, b) => {

        if (a.priority > b.priority) {
            return 1;
        } else if (a.priority < b.priority) {
            return -1;
        } else {
            return 0;
        }

    });

    return resultSortedByPriority
};

console.log(cardDistribution(inputData))