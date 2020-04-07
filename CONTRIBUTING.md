# Contributing to codeforces

This section will guide you through the contribution process.

* [Code Contributions](#code-contributions)
* [Commit message guidelines](#commit-message-guidelines)


## Code Contributions

#### Step 1: Clone
Fork the project on [GitHub] and clone your fork locally.
```text
  $ git clone https://github.com/AlbertHambardzumyan/codeforces-js.git
  $ cd codeforces-js
```

[GitHub]: https://github.com/AlbertHambardzumyan/codeforces-js

### Step 2: Branch
Create a new topic branch (from master branch) to contain your feature, change, or fix:
```text
  $ git checkout -b <topic-branch-name>
```
    
ex. Problem 38A - Army
  
### Step 3: Commit
Make sure git knows your name and email address:
```text
  $ git config --global user.name "Example User"
  $ git config --global user.email "user@example.com"
```
    
Add and commit:
```text
  $ git add my/changed/files
  $ git commit
```

Commit your changes in logical chunks. Please adhere to these [Commit message guidelines](#commit-message-guidelines).

#### Step 5: Rebase
Use git rebase to synchronize your work with the repository.
```text
  $ git fetch upstream
  $ git rebase upstream/master
```
   
#### Step 6: Push
Push your topic branch:
```text
  $ git push origin <topic-branch-name>
```
    
#### Step 7: Pull Request
Open a Pull Request with a clear title and description against the `master` branch using our Pull Request template.

Pull requests are usually reviewed within a few days.

### Step 8: Discuss and update

You will probably get feedback or requests for changes to your Pull Request. This is a big part of the submission 
 process so don't be discouraged!

To make changes to an existing Pull Request, make the changes to your branch. When you push to that branch,
 GitHub will automatically update the Pull Request.
 

## Commit message guidelines

a). Adding a new solution
```text
  Problem {number} - {name}.

example:
  Problem 38A - Army.
```

b). Improving existing solution
```text
    Problem {number} - {name}:
     - {message}.

example:
    Problem 38A - Army:
     - Improvement in performance
     - Reformat code
```
