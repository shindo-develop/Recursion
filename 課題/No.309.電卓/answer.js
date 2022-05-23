function calculator(op1,op2,operatorChar){
    const op1Float = parseFloat(op1, 10);
    const op2Float = parseFloat(op2, 10);
    switch (operatorChar){
        case "+":
            return op1Float + op2Float;
            break;
        case "-":
            return op1Float - op2Float;
            break;
        case "*":
            return op1Float * op2Float;
            break;
        case "/":
            if(op2Float === 0)return op1Float;
            return op1Float / op2Float;
            break;
    };
};
