How did it started?
* yarn config set workspaces-experimental true
* yarn init
* yarn add lerna --dev
* for each package 
  * lerna init
* to install a package
  * local
    * lerna add shelljs --scope=@statebook/scripts
  * common
    * yarn add husky --dev -W
* remove a package
  * local
    * cd to package then yarn remove <package name>
  * global
    * lerna exec -- yarn remove dep-name