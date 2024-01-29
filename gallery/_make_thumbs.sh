#!/bin/bash

rm thumbs/*
mogrify -path thumbs -resize 20% img/*
cd img
find | awk '{
  OUT=$0;
  gsub("./", "", OUT); 
  print("  \""OUT"\":");
  print("    description: \"\"");
  print("    attribute: \"\"");
  print("");
}' 


