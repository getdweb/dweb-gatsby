# dweb-gatsby-transition-tools

## 1. **cqs.py**

### Purpose

cqs.py will look at each component in dweb-gatsby that makes a query, then it the program will run that query against a development server and store the results.

### Instructions

Spin up a development server of an older version of dweb-gatbsy (SHA: db4fc7aae86e74a0d31c69f4dd6ed6924b527469 is what I used) that is still tied to Wordpress (You'll probably need to use node v14 to make it work). Once that is running, you can run cqs.py with the -h flag for more information on the tool. You can either use the -s flag when running cqs.py or just manually change the `DEFAULT_FILEPATH` variable to indicate the directory where the old dweb-gatsby is stored.

After sucessfully running cqs.py, you can shutdown the development server of the older version of dweb-gatsby.

If an error is thrown, try commenting out the line which reads `del json_data["extensions"]` (the line may or may not be necessary depending on what version of dweb-gatsby you are running)

## 2. **transform_cqs_data.py**

### Purpose

transform_cqs_data.py will take the data from cqs.py and transform it into a cleaner shape that is compatible with the new dweb-gatsby. It shapes each component's data in a unique way, and some components output into multiple files where in other cases multiple components end up writing to the same file.

### Instructions

You can just run transform_cqs_data.py without arguments. Optionally, you can update `COPY_TO_SRC` and `SRC_FOLDER` variables to be `True` and the location of the `src` folder for the clone of dweb-gatsby on your machine respectively if you want the data that is written out from transform_cqs_data.py to automatically overwrite the contents of your data folder in dweb-gatsby*.

\*NOTE: You should ensure that the directory you point to in `SRC_FOLDER` is the directory of the new version of dweb-gatsby and NOT the directoy of the old version you ran for cqs.py

## 3 - Check for differences in static content

There was certain chunks of data in many components that were unlikely to change that I ended up making static (i.e. I broke their reliance on this pipeline because they were unlikely to change and it made for cleaner code). If these values were updated in the Wordpress (however unlikely), running my tools would not carry those changes forward into the data folder. I have included a copy of the `cqs_output` from the time that I entered the data, called `cqs_output_archive`, so that when you run `cqs.py`, you can run a diff on its output against the contents of `cqs_output_archive` and see if any changes have been made that wouldn't carry over. There isn't an exact list of everthing made to be static, but comments at the top of `transform_cqs_data.py` indicate which components had elements that were made static or at least partially so. Basically anything not in a list was made to be static, so be on the lookout for any changes made not part of a list. You can figure this out exactly by looking at the code for `transform_cqs_data.py` for any given component and comparing which values from the component's json file `transform_cqs_data.py` operates on and which elements it does not.

Summary: If a value exists in a component's json file but `transform_cqs_data.py` doesn't operate on it, then that value was made to be static. If that value shows up in a diff between the output of `transform_cqs_data.py` and `cqs_output_archive`, you will have to manually find and update that value in dweb-gatsby.
