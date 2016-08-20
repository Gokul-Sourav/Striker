
public class ArrayAndIndex {
	
public static void main(String[] args) {
	int[] a={0,1,2,3,4};
	arrayWithIndex(a);
}

public static void arrayWithIndex(int[] a) {
	for(int i=0;i<a.length;i++)
	{
		if(a[i]==i)
		{
			System.out.println(a[i]+" equal to its Index:"+i);
		} 
	}
	
}

}