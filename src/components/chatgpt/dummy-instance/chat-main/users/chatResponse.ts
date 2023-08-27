export function res1(fistName: string): string {
    return `Hi ${fistName || 'Nuku'}, 
Here are your linked accounts.. 
• Bank of America 45566 
• Yale debt 
• US bank loan.

Please use the link button to add any credit card, bank accounts or other active accounts that are missing. If all your relevant accounts are already listed, simply click the Done button to proceed.`;
}

export function res2(fistName: string): string {
    return `After reviewing all your transactions, I've created your Baseline report. This report is crucial in understanding your needs, and will help us provide tailored services to achieve your goals. Let's start this journey together!
    
Type “generate my report” in the input box below and click the (paper plane icon) to generate the baseline report.

Welcome aboard, ${fistName || 'Nuku'}.`
};

const currentDate = new Date().toISOString().slice(0, 10)

export function res3(fistName: string): string {
    return `Baseline Report for the ${fistName || 'Nuku'} Household
${currentDate}

Table of Contents:
    1. Introduction
    2. Income and Expense Analysis
    2.1. Subscription Review
    3. Debt Analysis
    3.1. Debt Repayment Strategies
    4. Savings and Emergency Fund Analysis
    4.1. Savings Account Comparison
    5. Retirement Savings Analysis
    5.1. Retirement Projections
    6. Conclusion

    1. Introduction
Dear User full name,
This financial assessment aims to provide insights into your current financial situation and offer minimal
recommendations for you to consider as you see fit for your needs. The report is structured into five
sections, covering income and expenses, debt, savings and emergency fund, and retirement savings.
Each section includes analysis and data to provide you with a clear understanding of your financial
position.

    1. Income and Expense Analysis
    ● Total income: $95,000 per year
    ● Average monthly expenses: $6,000

[Insert Pie Chart: Breakdown of Monthly Expenses]
The pie chart displays the allocation of your monthly expenses in different categories such as housing,
utilities, groceries, transportation, entertainment, and others. The analysis reveals that housing and
transportation expenses are the most significant, accounting for nearly 60% of your total monthly
expenses.
[Insert Bar Chart: Comparison of Monthly Income and Expenses]
The bar chart provides a comparison of your average monthly income ($7,917) and average monthly
expenses ($6,000), showing a positive difference of $1,917. This surplus should be allocated towards
savings and debt repayment.
2.1. Subscription Review
In reviewing your expenses, we identified several subscription services that may not be providing value
and can be canceled to reduce expenses. These include:

    ● Streaming services: You have subscriptions to four streaming services, totaling $50 per month. 
        Consider consolidating to one or two services based on your preferences.
    ● Gym memberships: Both you and your spouse have separate gym memberships, costing a
        combined $120 per month. Look for a family membership or an alternative fitness option to lower
        this expense.
    ● Magazines and newspapers: You have subscriptions to three magazines and one newspaper,
        amounting to $35 per month. Assess the utility of these subscriptions and cancel any that are not
        regularly used.
        1. Debt Analysis
    ● Total debt: $45,000 (mortgage, car loans, credit cards)

[Insert Table: Debt Overview]
The table lists each of your debts, including the principal balance, interest rate, and minimum monthly
payment. The mortgage and car loans have relatively low interest rates, while the credit card debt carries
a higher interest rate.

[Insert Bar Chart: Debt Repayment Progress]
The bar chart displays your progress in reducing each of your debts over the past 24 months. The credit
card debt has been reduced by 20%, while the mortgage and car loans have been reduced by 5% and
30%, respectively.

3.1. Debt Repayment Strategies
To accelerate your debt repayment, consider implementing one of the following strategies:

    ● Debt Avalanche: Focus on paying off debts with the highest interest rates first, while making
        minimum payments on other debts. This strategy can save you money on interest payments over
        time.
    ● Debt Snowball: Pay off debts with the smallest balances first, while making minimum payments
        on other debts. This strategy can provide quick wins, helping you stay motivated to continue
        paying off debt.
    1. Savings and Emergency Fund Analysis
    ● Savings: $25,000 in a regular savings account
    ● Emergency fund: 4.17 months of living expenses

[Insert Line Chart: Monthly Savings Account Balance]
The line chart shows the growth of your savings account balance over the past 24 months. The balance
has increased steadily, with a few dips due to unexpected expenses.

[Insert Pie Chart: Comparison of Savings and Emergency Fund Goals]
The pie chart compares your current savings and emergency fund levels to the recommended levels,
illustrating areas for improvement. Ideally, you should aim for 3-6 months of living expenses in your
emergency fund and increase your overall savings rate.

4.1. Savings Account Comparison
Your current savings account has an interest rate of 0.50%. To maximize your savings growth, consider
transferring your funds to a high-yield savings account. Some high-yield savings accounts offer interest
rates of 1.50% or higher, which can significantly increase your savings over time.

[Insert Table: High-Yield Savings Account Comparison]
The table compares various high-yield savings accounts, including their interest rates, fees, and minimum
balance requirements.

    1. Retirement Savings Analysis
    ● Retirement savings: $75,000 in 401(k) accounts

[Insert Table: Retirement Savings Overview]
The table provides a summary of your 401(k) accounts, including the account balances, contribution
rates, and investment allocations. The majority of your  investments are allocated to a blend of stock and
bond index funds, which is a balanced approach to long-term investing.

[Insert Line Chart: Retirement Savings Growth]
The line chart displays the growth of your retirement savings over the past 24 months, factoring in
contributions and investment returns. Your retirement savings have increased by approximately 20%
during this period.

5.1. Retirement Projections
Based on your current retirement savings and contributions, we have projected your retirement savings at
various ages. The projections assume a conservative annual investment return of 5%.

[Insert Table: Retirement Projections]
The table shows your projected retirement savings at ages 55, 60, and 65. These projections can help
you determine if you are on track to achieve your retirement goals or if you need to adjust your
contributions or investment strategy.

    1. Conclusion

Based on the analysis, here are some items to consider:

    1. Increase your savings rate: Aim to save at least 20% of your income. Cutting unnecessary
        expenses, such as subscriptions and dining out, can help achieve this goal.
    2. Reduce debt: Prioritize paying off high-interest debt, such as credit cards. Once paid off, focus on
        paying down other lower-interest debts.
    3. Maintain emergency fund: Your current emergency fund is adequate, but review and adjust it
        periodically according to changes in expenses or income.
    4. Review and adjust retirement savings: Regularly review your retirement savings plan and adjust
        your contributions to ensure you are on track to achieve your goals.
    5. Reevaluate subscription services: Assess the value and necessity of your current subscriptions
        and cancel any that are not being fully utilized.

We look forward to working with you to achieve your financial goals.

Thank you.
Team Kraal

———————————————————————
Would you like to see a quick summary of this report?`
}

export function res4(yesNo: string) {
    if (yesNo.toLowerCase() === 'no') {
        return `Okay, click on the link below to Go to Dashboard`;
    } else {
        return `Your monthly income of $7,917 exceeds your average monthly expenses of $6,000, providing a surplus of $1,917 that should be allocated towards savings and debt repayment.
You can reduce your expenses by canceling subscriptions that do not provide value, such as consolidating streaming services, gym memberships, and magazine and newspaper subscriptions.
Your total debt of $45,000 includes mortgage, car loans, and credit cards. Prioritize paying off high-interest credit card debt first and consider implementing either the Debt Avalanche or Debt Snowball strategy to accelerate your debt repayment.
You have $25,000 in a regular savings account, which is commendable, but you should aim for 3-6 months of living expenses in your emergency fund and consider transferring your funds to a high-yield savings account with an interest rate of 1.50% or higher to maximize your savings growth.
Your retirement savings of $75,000 in 401(k) accounts have increased by approximately 20% over the past 24 months, which is a good start. Regularly review your retirement savings plan and adjust your contributions to ensure you are on track to achieve your goals.
To conclude, consider saving at least 20% of your income, prioritize paying off high-interest debt, maintain your emergency fund, and regularly review and adjust your retirement savings plan. Cancel unnecessary subscriptions to reduce expenses and transfer your savings to a high-yield savings account to maximize growth.

We can help you do this!

Team Kraal

Click the link at the bottom of the page to Go to Dashboard`;
    }
}