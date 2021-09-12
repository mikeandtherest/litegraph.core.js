cd "$(dirname "$0")"
mkdir -p ../build
python builder.py deploy_files_core.txt -o ../build/litegraph.core.min.js -o2 ../build/litegraph.core.js
chmod a+rw ../build/* 
