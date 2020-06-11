CXXFLAGS = -g -Wall -Wextra -std=c++11
CXX = g++

project=gestion_donnees_vent


all: ${project}

${project} : gestion_donnees_vent.o donneesVents.o
	${CXX} $^ -o ${project} -ljsoncpp -lmysqlclient

gestion_donnees_vent.o: gestion_donnees_vent.cpp donneesVents.h 
donneesVents.o: donneesVents.cpp donneesVents.h

clean:
	rm -f *~ *.o ${project}
