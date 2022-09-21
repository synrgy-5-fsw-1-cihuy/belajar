# STASH

# Workflow
Stash adalah sebuah function di git untuk melakukan saving sementara perubahan kita di local ketika lupa pulling

# Command
## Checking local changes
Sebelum melakukan proses stashing changes, kita perlu melakukan checking changes di local kita dengan command
```
git status
```
### Ilustrasi
![Checking local changes](./img/git_status.png)

## Add changes on staging area
Setelah melakukan checking local changes, kita perlu memasukkan changes kita ke staging area agar bisa melakukan stashing dengan command
```
git add .
```
### Ilustrasi
![Add staging area](./img/git_add_stash.png)

## Add stashing
Setelah melakukan add changes to staging area, kita bisa langsung menggunakan proses stashing dengan command
```
git stash
```
### Ilustrasi
![Add stash area](./img/git_stashing.png)

## Check list of stash
Kita juga bisa melihat list dari stashing yang kita apply di local kita dengan command
```
git stash list
```
### Ilustrasi
![Stash list](./img/git_stash_list.png)

## Applying stash
Setelah kita melakukan pulling dari update HEAD repository, kita bisa mengembalikan code changes kita dari stash dengan command
```
git stash pop
```
### Ilustrasi
![Stash pop](./img/git_stash_pop.png)