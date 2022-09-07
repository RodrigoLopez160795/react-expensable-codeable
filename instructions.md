# Expensable - Custom Hooks

## The problem

Expensable is growing really great. We have implemented routing for the sidebar
and search params for the date picker but the last year-month selection is not
saved anywhere. If the user selects one month, goes to another page, and then
returns, the date is back to the default value.

### The solution

Implement a solution using Local Storage to persist the date selection between
pages. Once your solution is working, try to abstract the logic to a Custom
Hook: **useLocalStorage**.
