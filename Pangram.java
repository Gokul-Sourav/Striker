public class Pangram {
	static int count;
static String getstring(String input1)
{
	String s=input1;
	s=s.toLowerCase();
	String[] x=s.split("");
	String s1="abcdefghijklmnopqrstuvwxyz";
	String[] y=s1.split("");
	for(int i=0;i<y.length;i++)
	{
		for(int j=0;j<x.length;j++)
		{
			if(y[i].equals(x[j]))
			{
				count++;
				break;
			}
			else
			{
				continue;
			}
		}
	}
	if(count==26)
	{
		return "It is a Panagram";
	}
	else {
		return "Not A panagram";
	}
}
public static void main(String[] args) {
	System.out.println(getstring("wertyuiop567sadfghjklzxcvbnmq"));
}
}
