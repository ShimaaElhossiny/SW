public class Login {
 String name;
 String password;
 public Login (String N, String P)
 {
     this.name=N;
     this.password=P;
 }

 String getName(){return this.name;}
 String getPassword(){return this.password;}
 void setName(String N){this.name=N;}
 void setPassword(String P){this.password=P;}

}
