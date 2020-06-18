CXXFLAGS = -g -Wall -Wextra -std=c++11
CXX = g++

project=remplir_base_de_donnees


all: ${project}

${project} : remplir_base_de_donnees.o donneesVents.o
	${CXX} $^ -o ${project} -ljsoncpp -lmysqlclient

remplir_base_de_donnees.o: remplir_base_de_donnees.cpp donneesVents.h 
donneesVents.o: donneesVents.cpp donneesVents.h

clean:
	rm -f *~ *.o ${project}
