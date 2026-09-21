What did the rejected push error message tell you, and why did it happen?

\- The push was rejected because Clone B was behind the remote branch. Clone A has already pushed new changes. Git rejected the push because pushing directly could overwrite the changes already on the remote branch. I needed to fetch the remote changes and reconcile them first.



What's the actual difference between how you resolved Task 3 (merge) vs Task 4 (rebase)?

\- For Task 3, I used merge. It combined the changes from Clone A and Clone B and created a merge commit.



\- For Task 4, I used rebase. It put my new changes on top of the latest remote changes. This made the commit history more organized.



What one habit would have avoided both rejected pushes in this lab?

\- I should have used git fetch before making changes and before pushing. This would have shown me if there were new changes on the remote branch.



Which approach - merge or rebase - would you default to on a shared team branch, and why?

\- I would use merge on a shared team branch because it preserves the commit history and does not rewrite commits that other developers may already have.

