What did the rejected push error message tell you, and why did it happen?

\- The push was rejected because Clone B was behind the remote branch. Clone A has already pushed new changes. Git rejected the push because pushing directly could overwrite the changes already on the remote branch. I needed to fetch the remote changes and reconcile them first.



What's the actual difference between how you resolved Task 3 (merge) vs Task 4 (rebase)?

\- For Task 3, I used merge. It combined the changes from Clone A and Clone B and created a merge commit.

\[TASK 1 



\- For Task 4, I used rebase. It put my new changes on top of the latest remote changes. This made the commit history more organized.



What one habit would have avoided both rejected pushes in this lab?

\- I should have used git fetch before making changes and before pushing. This would have shown me if there were new changes on the remote branch.



Which approach - merge or rebase - would you default to on a shared team branch, and why?

\- I would use merge on a shared team branch because it preserves the commit history and does not rewrite commits that other developers may already have.





Task 1 Evidence



\[Task 1 evidence](screenshots/TASK1.png)



Task 2 Evidence



\[Task 2 evidence](screenshots/TASK2.png)



Task 3 Evidence



\[Task 3 evidence](screenshots/TASK3.png)



Task 4 Evidence



\[Task 4 evidence](screenshots/TASK4.png)



Task 5 Evidence



\[Task 5 evidence](screenshots/TASK5.png)



Task 6 Evidence



\[Task 6 evidence](screenshots/TASK6.png)







