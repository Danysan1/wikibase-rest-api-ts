grep -rl ' &amp; object' ./src | xargs sed -i 's/ &amp; object//g'