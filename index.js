var drake1 = dragula(
    {
        containers      : 
        [
          document.getElementById('copy-container'),
          document.getElementById('drag-container'),
        ],
        copy            : true,
        removeOnSpill   : true,
        moves           : (e,s,h) => s == document.getElementById('copy-container'),
        accepts         : (e,t,s,b) => t == document.getElementById('drag-container'),
        mirrorContainer : document.getElementById('base'),
    })
    var drake2 = dragula(
    {
        containers      : 
        [
          document.getElementById('copy-container'),
          document.getElementById('drag-container'),
        ],
        copy            : false,
        revertOnSpill   : true,
        moves           : (e,s,h) => s == document.getElementById('drag-container'),
        accepts         : (e,t,s,b) => t == document.getElementById('drag-container'),
        mirrorContainer : document.getElementById('base'),
    })