**package.json**

**package:^1.2.3 version (major.minor.patch)**

    3 -> indicates a patch which has some bug fixes
    2 -> indicates there are some new features in the package but the code will not break even it is updated to some higher minor version
    1 -> indicates a major release, will break the code.
    ^ -> which update we accept in the package i.e it is minor release updates.
    ~ -> indicate only patch releases -> it is lot more safer.
    * -> bump up if there are major releases.

Node js workflow:-
In the main process which is a single thread

    first the top code executes(excluding the call backs)
    then the call backs are registered in the event loop(which allows non-blocking I/o ops to run in node )
    Inside the event loop:-
        has 6 phases. -> timer (setTimeout,delays,setInterval)
                      -> pending callbacks (which are deferred for next loop iteration.)
                      -> idle,prepare(used internally)
                      -> i/o(network calls,file i/o)
                      -> setImmediate
                      ->close callbacks