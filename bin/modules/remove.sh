#!/bin/bash

source ./bin/modules/paths.sh
source ./bin/modules/urls.sh

# Declare an array with the paths. resources/common are skipped when their URL
# is empty, because then they are committed directly in this repo.
declare -a paths=($k8s_path $delete_account_path $flower_path)
[ -n "$resources_url" ] && paths+=($resources_path)
[ -n "$common_url" ] && paths+=($common_path)

# Clear submodule entries from the git index so pull.sh can re-add them.
# Without this, git submodule add fails with "already exists in the index".
for path in "${paths[@]}"; do
    if git ls-files --error-unmatch "$path" > /dev/null 2>&1; then
        git rm -rf --cached "$path" > /dev/null 2>&1
    fi
done

# Remove the modules from the git history
rm -rf ./.git/modules/
rm -rf .gitmodules

# Loop over the paths, and remove all the files on disk
for path in "${paths[@]}"; do
    rm -rf $path
done




