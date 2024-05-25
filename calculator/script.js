document.addEventListener('DOMContentLoaded', () => {
    const actions = document.querySelector('.actions');
    const ans = document.querySelector('.ans');
    const expressionDisplay = document.getElementById('expression-display');
    let expression = '';

    const operationFunctions = {
        'del': () => expression = expression.slice(0, -1),
        '=': () => evaluate(),
        'clear': () => clear(),
    };

    actions.addEventListener('click', ({ target }) => {
        const { value } = target.dataset;

        if (value !== undefined) {
            operationFunctions[value] ? operationFunctions[value]() : appendToExpression(value);
            updateDisplay();
        }
    });

    const operate = (expr, operation) => eval(operation(expr));

    const evaluate = () => {
        try {
            const answer = eval(expression);
            expression = `${answer}`;
        } catch (error) {
            expression = 'Error';
        }
    };

    const appendToExpression = (value) => expression += value;

    const clear = () => {
        expression = '';
        ans.value = 0;
        expressionDisplay.textContent = '';
    };

    const updateDisplay = () => {
        if (expression === undefined) {
            expression = '';
            ans.value = 0;
        } else {
            ans.value = expression;
            expressionDisplay.textContent = expression;
        }
    };
});
