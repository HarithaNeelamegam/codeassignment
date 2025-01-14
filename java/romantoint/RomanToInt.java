import java.util.Scanner;
public class RomanToInt {
    public static void main(String[] args){
        Scanner scanner=new Scanner(System.in);
        System.out.print("Enter a roman numeral");
        String roman=scanner.nextLine().toUpperCase();

        if(!isValidRoman(roman)){
            System.out.println("Invalid roman numeral");
            return;
        }
        int result=romantoInteger(roman);
        System.out.println("Integer value of"+roman+"is"+result);
    }
    
    private static boolean isValidRoman(String s){
        String romanRegex="^M{0,3}(CM|CD|D{0,1}C{0,3})(XC|XL|L{0,1}X{0,3})(IX|IV|V{0,1}I{0,3})$";
        return s.matches(romanRegex);
       }
    public static int romantoInteger(String s){
        int[] romanValues=new int[256]; 
        romanValues['I']=1;
        romanValues['V']=5;
        romanValues['X']=10;
        romanValues['L']=50;
        romanValues['C']=100;
        romanValues['D']=500;
        romanValues['M']=1000;
        int total=0;
     for(int i=0;i<s.length();i++){
        int current=romanValues[s.charAt(i)];
    
        if(i+1<s.length()&&current<romanValues[s.charAt(i+1)]){
            total-=current;
        }else
        {
            total+=current;
        }
     }return total;
    
    }
    
}
