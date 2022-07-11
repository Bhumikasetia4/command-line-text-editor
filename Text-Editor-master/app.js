const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')

//customize yargs version
yargs.version('15.3.1')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
title:{
    describe:'Note title',
    demandOption: true,
    type:'string'
},
    
    body:{
        describe:'Note body',
        demandOption:true,
        type:'string'
    }
},
  handler(argv){
      notes.adddNote(argv.title, argv.body)
  }
})
//Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
title:{
    describe:'Note Title',
    demandOption:'true',
    type:'string'
}
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//Create read command
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
describe:'Note title',
demandOption:true,
type:'string'
        }
    },
    handler(argv){
       notes.readNote(argv.title)
    }
})

//Create a list command
yargs.command({
    command:'list',
    describe:'list your note',
    handler(){
        notes.listNotes()
    }
})
//add,remove,read,list
yargs.parse()