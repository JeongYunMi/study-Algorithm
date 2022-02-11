def calculator(num_expression, operator):
    i = 0
    if len(num_expression) == 1:
        return num_expression[0]
    if not (operator in num_expression):
        return 0
    while i < len(num_expression):
        if num_expression[i] == operator:
            print(num_expression[i - 1:i + 2])
            print(eval(num_expression[i - 1] + num_expression[i] + num_expression[i + 1]))
        else:
            i += 1

    return max(calculator(num_expression, "+"), calculator(num_expression, "-"), calculator(num_expression, "*"))


def solution(expression):
    num_expression = []
    prev = 0
    for i in range(len(expression)):
        if expression[i] == "-" or expression[i] == "+" or expression[i] == "*":
            num_expression.append(expression[prev:i])
            num_expression.append(expression[i])
            prev = i+1
        print(num_expression)

    num_expression.append(expression[prev:])
    print(num_expression)

    answer = max(calculator(num_expression, "+"), calculator(num_expression, "-"), calculator(num_expression, "*"))
    return answer


print(solution("100-200*300-500+20"))