#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>
#include<fcntl.h>

#define BUF_SIZE 100

int main()
{
int fd[2];
char buf[BUF_SIZE];
char nazwa[20];
int count;
int plik;

pipe(fd);

if(fork()==0)
{
close(0);
dup(fd[0]);
close(fd[0]);
close(fd[1]);
close(1);
execlp("display","display", NULL);

}
close(fd[0]);
printf("Nazwa? ");
scanf("%s", nazwa);

plik=open(nazwa, O_RDONLY);
while((count=read(plik,buf,BUF_SIZE))>0)
{
buf[count]='\0';
write(fd[1],buf,count);
}
close(fd[1]);
}
